import { Ring } from "@uiball/loaders";

interface LoaderProps {
  rsvpConfirmation?: boolean;
  homepage?: boolean;
}

export default function Loaders({ rsvpConfirmation, homepage }: LoaderProps) {

  return (
    <>
      {rsvpConfirmation && (
        <Ring
          size={24}
          lineWeight={5}
          speed={2}
          color="white"
        />
      )}

      {homepage && (
        <Ring
          size={35}
          lineWeight={5}
          speed={2}
          color="#7a8262"
        />
      )}
    </>
  )
}