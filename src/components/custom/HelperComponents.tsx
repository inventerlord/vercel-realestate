import { LoaderCircle } from "lucide-react";
import { Suspense } from "react";

export const getMessageForToast = (error: any) => {
  if (typeof error === 'string') {
    return error;
  } else if (typeof error === 'object' && error !== null) {
    const errorMessages = Object.values(error).filter(msg => typeof msg === 'string');

    if (errorMessages.length > 0) {
      // Return JSX for the toast content
      return (
        <ul>
          {errorMessages.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      );
    }
  } else {
    return 'An unexpected error occurred';
  }
}




export const Loader = () => {
  return (
    <div className="absolute text-white top-0 right-0 bottom-0 left-0 bg-black/90 z-50">

      <div className="flex flex-col w-full h-full place-content-center place-items-center">
        <div>
          <LoaderCircle size={30} className="animate-spin" />
        </div>
        <span>Loading</span>
      </div>
    </div>
  );
}


export const LazyLoader = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense fallback={<Loader />}>
      {children}
    </Suspense>
  )
}