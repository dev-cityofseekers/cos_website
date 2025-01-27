import { useTranslation } from 'react-i18next';

function What() {
  const { t } = useTranslation();

  return (
      <div className="flex flex-col md:flex-row md:h-screen">
        <img
            src="/wallpapers/Martin02.JPG"
            alt={t('what.leftImageAlt')}
            className="w-full md:w-1/2 object-cover md:block hidden"
            id="left_image"
        />

        <div className="w-full md:w-1/2 flex flex-col">
          <div className="m-10 grow">
            <div className="text-cos-off-black font-omnes text-center text-4xl">
              {t('what.title')}
            </div>
            <div className="text-cos-off-black text-2xl pt-7">
              {t('what.description1')}
              <br />
              <br />
              {t('what.description2')}
            </div>
          </div>
          <img
              src="/wallpapers/Martin07.JPG"
              alt={t('what.rightImageAlt')}
              className="w-full object-cover overflow-hidden"
              id="right_bottom_image"
          />
        </div>
      </div>
  );
}

export default What;