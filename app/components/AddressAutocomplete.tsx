"use client";

import { useEffect, useRef } from "react";
import { useMapsLibrary } from "@vis.gl/react-google-maps";

export type AddressData = {
  address: string;
  placeId: string;
  lat: number;
  lng: number;
};

type AddressAutocompleteProps = {
  value: string;
  onChange: (data: AddressData) => void;
  placeholder: string;
  className?: string;
};

export default function AddressAutocomplete({
  value,
  onChange,
  placeholder,
  className,
}: AddressAutocompleteProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const places = useMapsLibrary("places");

  useEffect(() => {
    if (!places || !inputRef.current) return;

    const autocomplete = new places.Autocomplete(inputRef.current, {
      fields: [
        "formatted_address",
        "place_id",
        "geometry",
      ],
    });

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();

      if (
        !place.formatted_address ||
        !place.place_id ||
        !place.geometry?.location
      ) {
        return;
      }

      onChange({
        address: place.formatted_address,
        placeId: place.place_id,
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      });
    });

    return () => {};
  }, [places, onChange]);

  return (
    <input
  ref={inputRef}
  type="text"
  placeholder={placeholder}
  className={className}
  autoComplete="off"
  defaultValue={value}
/>
  );
}