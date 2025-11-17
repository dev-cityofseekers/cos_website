import { GOOGLE_MAPS_EMBED } from '../config/constants';

function GoogleMaps() {
  return (
    <iframe
      className="h-full w-full"
      src={GOOGLE_MAPS_EMBED.URL}
      loading="lazy"
      title="Google Maps - City of Seekers Festival Location"
      style={{
        border: GOOGLE_MAPS_EMBED.STYLE.BORDER,
        width: GOOGLE_MAPS_EMBED.STYLE.WIDTH,
        height: GOOGLE_MAPS_EMBED.STYLE.HEIGHT,
      }}
      allow={GOOGLE_MAPS_EMBED.ALLOW}
    />
  );
}

export default GoogleMaps;