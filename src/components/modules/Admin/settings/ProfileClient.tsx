'use client';

import ImageCropper from '@/components/common/ImageCropper/ImageCropper';
import SubmitButton from '@/components/common/button/submit-button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import useActionHandler from '@/hooks/useActionHandler';
import { updateUser, updateUserWithFormData } from '@/services/user/users';
import { IUser } from '@/types/api.types';
import { userUpdateSchema, UserUpdateValues } from '@/zod/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { Camera, PencilLine, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

type Props = {
  user: IUser;
};

const ProfileClient = ({ user }: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [showCropper, setShowCropper] = useState(false);
  const [tempImageSrc, setTempImageSrc] = useState<string | null>(null);
  const [uploadedImageBlob, setUploadedImageBlob] = useState<Blob | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const router = useRouter();
  const { executePost } = useActionHandler();

  const form = useForm<UserUpdateValues>({
    resolver: zodResolver(userUpdateSchema),
    defaultValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      picture: user.picture || '',
    },
  });

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        setTempImageSrc(reader.result as string);
        setShowCropper(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCropComplete = (croppedImageBlob: Blob) => {
    setUploadedImageBlob(croppedImageBlob);
    setShowCropper(false);
    // Create object URL for preview
    const objectUrl = URL.createObjectURL(croppedImageBlob);
    form.setValue('picture', objectUrl); // Update preview in form (optional, or just for display)
  };

  const onSubmit = async (data: UserUpdateValues) => {
    await executePost({
      action: async () => {
        if (uploadedImageBlob) {
          const formData = new FormData();
          formData.append('data', JSON.stringify(data));
          formData.append('file', uploadedImageBlob, 'profile.jpg');
          return updateUserWithFormData(user._id!, formData);
        } else {
          return updateUser(user._id!, data);
        }
      },
      success: {
        onSuccess: () => {
          setIsEditing(false);
          setUploadedImageBlob(null);
          router.refresh();
        },
        message: 'Profile updated successfully',
        loadingText: 'Updating profile...',
      },
      errorMessage: 'Failed to update profile.',
    });
  };

  const watchedFirstName = form.watch('firstName');
  const watchedLastName = form.watch('lastName');
  const watchedPicture = form.watch('picture');

  const displayFullName = isEditing
    ? `${watchedFirstName || ''} ${watchedLastName || ''}`.trim()
    : user.fullName;

  const displayPicture = isEditing
    ? watchedPicture || '/profile.jpg'
    : user.picture || '/profile.jpg';

  const displayInitials = displayFullName
    .split(' ')
    .map((n) => n[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();

  return (
    <div className="w-full max-w-4xl">
      <Card>
        <CardHeader>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <div className="group relative">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={displayPicture} alt={displayFullName} />
                  <AvatarFallback className="text-2xl">
                    {displayInitials}
                  </AvatarFallback>
                </Avatar>
                {isEditing && (
                  <div
                    className="absolute inset-0 flex cursor-pointer items-center justify-center rounded-full bg-black/50 opacity-0 transition-opacity group-hover:opacity-100"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <Camera className="h-8 w-8 text-white" />
                  </div>
                )}
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  accept="image/*"
                  onChange={onFileChange}
                />
              </div>
              <div className="text-center sm:text-left">
                <CardTitle className="text-2xl">{displayFullName}</CardTitle>
                <CardDescription>{user.email}</CardDescription>
                <div className="text-muted-foreground mt-2 text-sm">
                  Role: <span className="capitalize">{user.role}</span>
                </div>
              </div>
            </div>
            {!isEditing && (
              <Button onClick={() => setIsEditing(true)} size="sm">
                <PencilLine className="mr-2 h-4 w-4" /> Edit Profile
              </Button>
            )}
          </div>
        </CardHeader>

        <CardContent>
          {isEditing ? (
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="md:col-span-2">
                    <FormField
                      control={form.control}
                      name="picture"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Profile Picture URL</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="https://example.com/avatar.jpg"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      setIsEditing(false);
                      setUploadedImageBlob(null);
                      form.reset();
                    }}
                  >
                    <X className="mr-2 h-4 w-4" /> Cancel
                  </Button>
                  <SubmitButton />
                </div>
              </form>
            </Form>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-1">
                <h3 className="text-muted-foreground text-sm font-medium">
                  Full Name
                </h3>
                <p className="text-lg font-medium">{user.fullName}</p>
              </div>
              <div className="space-y-1">
                <h3 className="text-muted-foreground text-sm font-medium">
                  Email Address
                </h3>
                <p className="text-lg font-medium">{user.email}</p>
              </div>
              <div className="space-y-1">
                <h3 className="text-muted-foreground text-sm font-medium">
                  Role
                </h3>
                <p className="text-lg font-medium capitalize">{user.role}</p>
              </div>
              <div className="space-y-1">
                <h3 className="text-muted-foreground text-sm font-medium">
                  User ID
                </h3>
                <p className="text-muted-foreground font-mono text-sm">
                  {user._id}
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {showCropper && tempImageSrc && (
        <ImageCropper
          imageSrc={tempImageSrc}
          onCropComplete={handleCropComplete}
          onClose={() => setShowCropper(false)}
        />
      )}
    </div>
  );
};

export default ProfileClient;
