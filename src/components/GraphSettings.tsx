import { Settings } from "../types";
import { GeneralSettings } from "./GeneralSettings";
import { AppearanceSettings } from "./AppearanceSettings";

interface Props {
  directed: boolean;
  settings: Settings;
  setSettings: React.Dispatch<React.SetStateAction<Settings>>;
}

export function GraphSettings({ directed, settings, setSettings }: Props) {
  return (
    <div
      className="font-jetbrains flex flex-col m-0 hover:border-border-hover
        xl:right-5/200 space-y-3 z-10 lg:absolute lg:right-1/24 xl:w-1/5
        lg:top-1/2 lg:-translate-y-1/2 lg:w-1/4"
    >
      <div className="no-scrollbar overflow-scroll">
        <div className="flex space-x-3">
          <button
            className={
              settings.settingsFormat === "general"
                ? `h-7 border-2 border-clear-normal bg-clear-hover
                  hover:bg-clear-active rounded-md px-2 py-1 inline-flex
                  items-center justify-center active:bg-tab-active`
                : `h-7 border-2 border-border bg-block hover:border-border-hover
                  hover:bg-bg-tab-hover rounded-md px-2 py-1 inline-flex
                  items-center justify-center active:bg-tab-active`
            }
            onClick={() => {
              setSettings({ ...settings, settingsFormat: "general" });
            }}
          >
            General
          </button>
          <button
            className={
              settings.settingsFormat === "appearance"
                ? `h-7 border-2 border-clear-normal bg-clear-hover
                  hover:bg-clear-active rounded-md px-2 py-1 inline-flex
                  items-center justify-center active:bg-tab-active`
                : `h-7 border-2 border-border bg-block hover:border-border-hover
                  hover:bg-bg-tab-hover rounded-md px-2 py-1 inline-flex
                  items-center justify-center active:bg-tab-active`
            }
            onClick={() => {
              setSettings({ ...settings, settingsFormat: "appearance" });
            }}
          >
            Appearance
          </button>
        </div>
      </div>
      <GeneralSettings
        directed={directed}
        settings={settings}
        setSettings={setSettings}
      />
      <AppearanceSettings
        directed={directed}
        settings={settings}
        setSettings={setSettings}
      />
    </div>
  );
}
