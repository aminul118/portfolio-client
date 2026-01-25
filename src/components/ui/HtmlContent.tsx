interface IHtml {
  content: string;
  className?: string;
}

const HtmlContent = ({ content, className }: IHtml) => {
  return (
    <div
      suppressHydrationWarning
      className={className}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default HtmlContent;
