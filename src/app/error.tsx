"use client"; // Error components must be Client Components

import { Button } from "@nextui-org/react";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h2 className="text-center my-5 text-2xl font-semibold">
        {error.message ? error.message : "Something went wrong!"}
      </h2>
      <div className="flex gap-2">
        <Button
          className="text-white"
          variant="shadow"
          color="secondary"
          onClick={() => reset()}
        >
          Try again
        </Button>
        <Button as={Link} href="/" variant="shadow" color="primary">
          Go Home
        </Button>
      </div>
    </div>
  );
}
