type PageContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const PageContainer = ({ children, className }: PageContainerProps) => {
  return (
    <div className="bg-dark6 p-[42px] min-h-screen w-full">
      <div className={`my-0 mx-auto max-w-[1920px] ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default PageContainer;
