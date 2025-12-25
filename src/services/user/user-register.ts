'use server';

const registerUser = async (formdata: FormData) => {
  const payload = {
    name: formdata.get('name'),
    email: formdata.get('email'),
  };
};

export { registerUser };
