const ErrorMessage = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-sm font-medium text-destructive">{children}</p>;
};

export default ErrorMessage;
