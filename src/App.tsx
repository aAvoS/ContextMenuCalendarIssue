import React from "react";
import {
  ContextualMenu,
  ContextualMenuItemType
} from "@fluentui/react/lib/ContextualMenu";
import { Calendar as CalendarFabric } from "@fluentui/react/lib/Calendar";
import { defaultCalendarStrings } from "@fluentui/react";

export default class AppWrapper extends React.Component {
  render() {
    const noop = () => {};

    const cal = () => {
      return (
        <CalendarFabric
          showMonthPickerAsOverlay
          highlightSelectedMonth
          showGoToToday={false}
          onSelectDate={noop}
          // Calendar uses English strings by default. For localized apps, you must override this prop.
          strings={defaultCalendarStrings}
        />
      );
    };

    const menuItems = [
      { key: "newItem", text: "New" },
      { key: "upload", text: "Upload" },
      { key: "divider_1", itemType: ContextualMenuItemType.Divider },
      {
        key: "charm",
        text: "Charm",
        ariaLabel:
          "Charm. Press enter, space or right arrow keys to open submenu.",
        items: [
          {
            className: "pickerPopover",
            key: "calendar",
            text: "calendar",
            onRender: cal
          }
        ]
      }
    ];

    return (
      <React.Fragment>
        <ContextualMenu
          title={"testAvadhesh"}
          onDismiss={noop}
          items={menuItems}
          shouldFocusOnMount
        />
      </React.Fragment>
    );
  }
}
