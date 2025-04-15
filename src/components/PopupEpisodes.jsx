import { PopupEpisode } from "./PopupEpisode";

export const PopupEpisodes = () => {
  return (
    <div className="md:px-20 px-4 pb-12 border-white md:py-6 text-white flex flex-col gap-7">
      <h1 className="md:text-3xl text-2xl font-[600]">Episode</h1>
      <div className="grid md:gap-y-1 gap-y-7">
        <PopupEpisode
          no="1"
          src="/imglandscape/Type=32.png"
          title="Pilot"
          duration="30 min"
          desc="American football coach Ted Lasso is hired by a wealthy divorcee to coach the English soccer team AFC Richmond"
        />
        <PopupEpisode
          no="2"
          src="/imglandscape/Type=33.png"
          title="Biscuits"
          duration="29 min"
          desc="It’s Ted’s first day of coaching, and fans aren’t happy. He makes little headway but remains undeterred as the team play their first match..."
        />
        <PopupEpisode
          no="3"
          src="/imglandscape/Type=34.png"
          title="Trent Crimm: Independent"
          duration="30 min"
          desc="To arrange an in-depth exposé, Rebecca pairs cynical journalist Trent Crimm with Ted for a day. Ted and Roy venture into the community."
        />
        <PopupEpisode
          no="4"
          src="/imglandscape/Type=35.png"
          title="For The Children"
          duration="33 min"
          desc="Rebecca hosts the team’s annual charity benefit, where Ted stages a reconciliation between Roy and Jamie."
        />
        <PopupEpisode
          no="5"
          src="/imglandscape/Type=36.png"
          title="Tan Lines"
          duration="31 min"
          desc="With his wife and son visiting from America, Ted makes drastic changes to the lineup during a critical match."
        />
      </div>
    </div>
  );
};
