import { NextResponse } from "next/server";

type RouteRequest = {
  origin: {
    lat: number;
    lng: number;
  };
  destination: {
    lat: number;
    lng: number;
  };
};

export async function POST(request: Request) {
  try {
    const body: RouteRequest = await request.json();
    const apiKey = process.env.GOOGLE_MAPS_API_KEY;
    console.log(
  "Backend key prefix:",
  apiKey ? apiKey.substring(0, 12) : "NO KEY"
);

if (!apiKey) {
  return NextResponse.json(
    {
      success: false,
      message: "Google Maps API key nije pronađen.",
    },
    {
      status: 500,
    }
  );
}

    const response = await fetch(
  "https://routes.googleapis.com/directions/v2:computeRoutes",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask":
        "routes.distanceMeters,routes.duration",
    },
    body: JSON.stringify({
      origin: {
  location: {
    latLng: {
      latitude: body.origin.lat,
      longitude: body.origin.lng,
    },
  },
},

destination: {
  location: {
    latLng: {
      latitude: body.destination.lat,
      longitude: body.destination.lng,
    },
  },
},
      travelMode: "DRIVE",
    }),
  }
);

const data = await response.json();

if (!response.ok) {
  return NextResponse.json(data, { status: response.status });
}

const route = data.routes?.[0];

return NextResponse.json({
  distanceMeters: route.distanceMeters,
  duration: route.duration,
});
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Invalid request",
      },
      {
        status: 400,
      }
    );
  }
}