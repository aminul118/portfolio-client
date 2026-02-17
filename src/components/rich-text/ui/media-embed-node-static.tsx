'use client';

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import { Tweet } from 'react-tweet';

import type { TMediaEmbedElement } from 'platejs';
import type { SlateElementProps } from 'platejs/static';

import { parseTwitterUrl, parseVideoUrl } from '@platejs/media';
import { useMediaState } from '@platejs/media/react';
import { NodeApi } from 'platejs';
import { SlateElement } from 'platejs/static';

import { cn } from '@/lib/utils';

export function MediaEmbedElementStatic(
  props: SlateElementProps<TMediaEmbedElement>,
) {
  const {
    align = 'center',
    embed,
    isTweet,
    isVideo,
    isYoutube,
  } = useMediaState({
    urlParsers: [parseTwitterUrl, parseVideoUrl],
  });
  const provider = embed?.provider;

  return (
    <SlateElement className="py-2.5" {...props}>
      <figure
        className="group relative m-0 w-full cursor-default"
        style={{ textAlign: align }}
      >
        <div
          className={cn('relative inline-block max-w-full')}
          style={{ width: (props.element.width as string) || '100%' }}
        >
          {isVideo ? (
            isYoutube ? (
              <LiteYouTubeEmbed
                id={embed!.id!}
                title="youtube"
                wrapperClass={cn(
                  'rounded-sm',
                  'relative block cursor-pointer bg-black bg-center bg-cover [contain:content]',
                  '[&.lyt-activated]:before:absolute [&.lyt-activated]:before:top-0 [&.lyt-activated]:before:h-[60px] [&.lyt-activated]:before:w-full [&.lyt-activated]:before:bg-top [&.lyt-activated]:before:bg-repeat-x [&.lyt-activated]:before:pb-[50px] [&.lyt-activated]:before:[transition:all_0.2s_cubic-bezier(0,_0,_0.2,_1)]',
                  '[&.lyt-activated]:before:bg-[url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==)]',
                  'after:block after:pb-[var(--aspect-ratio)] after:content-[""]',
                  '[&_>_iframe]:absolute [&_>_iframe]:top-0 [&_>_iframe]:left-0 [&_>_iframe]:size-full',
                  '[&_>_.lty-playbtn]:z-1 [&_>_.lty-playbtn]:h-[46px] [&_>_.lty-playbtn]:w-[70px] [&_>_.lty-playbtn]:rounded-[14%] [&_>_.lty-playbtn]:bg-[#212121] [&_>_.lty-playbtn]:opacity-80 [&_>_.lty-playbtn]:[transition:all_0.2s_cubic-bezier(0,_0,_0.2,_1)]',
                  '[&:hover_>_.lty-playbtn]:bg-[red] [&:hover_>_.lty-playbtn]:opacity-100',
                  '[&_>_.lty-playbtn]:before:border-[transparent_transparent_transparent_#fff] [&_>_.lty-playbtn]:before:border-y-[11px] [&_>_.lty-playbtn]:before:border-r-0 [&_>_.lty-playbtn]:before:border-l-[19px] [&_>_.lty-playbtn]:before:content-[""]',
                  '[&_>_.lty-playbtn]:absolute [&_>_.lty-playbtn]:top-1/2 [&_>_.lty-playbtn]:left-1/2 [&_>_.lty-playbtn]:[transform:translate3d(-50%,-50%,0)]',
                  '[&_>_.lty-playbtn]:before:absolute [&_>_.lty-playbtn]:before:top-1/2 [&_>_.lty-playbtn]:before:left-1/2 [&_>_.lty-playbtn]:before:[transform:translate3d(-50%,-50%,0)]',
                  '[&.lyt-activated]:cursor-[unset]',
                  '[&.lyt-activated]:before:pointer-events-none [&.lyt-activated]:before:opacity-0',
                  '[&.lyt-activated_>_.lty-playbtn]:pointer-events-none [&.lyt-activated_>_.lty-playbtn]:opacity-0!',
                )}
              />
            ) : (
              <div
                className={cn(
                  provider === 'vimeo' && 'pb-[75%]',
                  provider === 'youku' && 'pb-[56.25%]',
                  provider === 'dailymotion' && 'pb-[56.0417%]',
                  provider === 'coub' && 'pb-[51.25%]',
                )}
              >
                <iframe
                  className={cn(
                    'absolute top-0 left-0 size-full rounded-sm border-0',
                  )}
                  title="embed"
                  src={embed!.url}
                  allowFullScreen
                />
              </div>
            )
          ) : null}

          {isTweet && (
            <div className={cn('[&_.react-tweet-theme]:my-0')}>
              <Tweet id={embed!.id!} />
            </div>
          )}
        </div>
        {(props.element as any).caption?.[0] && (
          <figcaption
            style={{
              width: (props.element.width as string) || '100%',
              margin: '0 auto',
            }}
            className="text-muted-foreground mt-2 text-center text-sm"
          >
            {NodeApi.string((props.element as any).caption[0])}
          </figcaption>
        )}
      </figure>

      {props.children}
    </SlateElement>
  );
}
