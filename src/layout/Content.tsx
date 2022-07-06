interface ContentProps {
  children: React.ReactNode;
}

export const Content = (props: ContentProps) => {
  const { children } = props;

  return (
    <div
      style={{
        flex: 1,
        maxHeight: "100vh",
        marginTop: 64,
        // height: 'calc(100% - 64px)',
        // marginTop: 64
      }}
    >
      {children}
    </div>
  );
};
