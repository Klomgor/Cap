import { createResource, Show } from "solid-js";
import { createStore } from "solid-js/store";

import { generalSettingsStore } from "~/store";
import { type GeneralSettingsStore } from "~/utils/tauri";
import { ToggleSetting } from "./Setting";

export default function ExperimentalSettings() {
  const [store] = createResource(() => generalSettingsStore.get());

  return (
    <Show when={store.state === "ready" && ([store()] as const)}>
      {(store) => <Inner initialStore={store()[0] ?? null} />}
    </Show>
  );
}

function Inner(props: { initialStore: GeneralSettingsStore | null }) {
  const [settings, setSettings] = createStore<GeneralSettingsStore>(
    props.initialStore ?? {
      uploadIndividualFiles: false,
      openEditorAfterRecording: false,
      hideDockIcon: false,
      autoCreateShareableLink: false,
      enableNotifications: true,
    }
  );

  const handleChange = async <K extends keyof typeof settings>(
    key: K,
    value: (typeof settings)[K]
  ) => {
    console.log(`Handling settings change for ${key}: ${value}`);

    setSettings(key as keyof GeneralSettingsStore, value);
    generalSettingsStore.set({ [key]: value });
  };

  return (
    <div class="flex flex-col w-full h-full">
      <div class="flex-1 custom-scroll">
        <div class="p-4 space-y-4">
          <div class="flex flex-col pb-4 border-b border-gray-2">
            <h2 class="text-lg font-medium text-gray-12">
              Experimental Features
            </h2>
            <p class="text-sm text-gray-10">
              These features are still in development and may not work as
              expected.
            </p>
          </div>
          <div class="space-y-3">
            <h3 class="text-sm text-gray-12 w-fit">Recording Features</h3>
            <div class="px-3 rounded-xl border divide-y divide-gray-3 border-gray-3 bg-gray-2">
              <ToggleSetting
                label="Custom cursor capture in Studio Mode"
                description="Studio Mode recordings will capture cursor state separately for customisation (size, smoothing) in the editor. Currently experimental as cursor events may not be captured accurately."
                value={!!settings.customCursorCapture}
                onChange={(value) => handleChange("customCursorCapture", value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
