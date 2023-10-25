function Where() {
  return (
    <div className="pb-14 pt-10 w-full">
      <div className="w-10/12 mx-auto">
        <div className="font-omnes text-center text-4xl">
          Where is the Festival?
        </div>
        <div className="lg:flex lg:flex-row pt-14 space-x-5">
          <iframe
            className="rounded-xl h-96 w-full pb-7"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2450.5237039205963!2d9.293726498058325!3d52.106599394361226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ba893bd80d335d%3A0xce05d0aaaef6ffe3!2sPferdeweg%202%2C%2031787%20Hameln!5e0!3m2!1sde!2sde!4v1698185596746!5m2!1sde!2sde"
            loading="lazy"
          />
          <div className="w-full">
            <div className="font-omnes  text-4xl  ">Where is the Festival?</div>
            <div>
              The campsite is located near the beautiful Hamelin In Saxony
              Germany
              <br />
              blbl
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Where;
