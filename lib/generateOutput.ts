import { Tab } from "@/components/TabsBuilder"; 

export function generateStandaloneHTML(tabs: Tab[]): string {
  const studentNumber = "s4118579";

  // Build tab buttons HTML
  const tabButtons = tabs
    .map(
      (tab, i) => `
        <button role="tab" aria-selected="${
          i === 0 ? "true" : "false"
        }" data-tab="${tab.id}"
          style="padding:5px 10px; margin:2px; border:1px solid #000; cursor:pointer; background:${
            i === 0 ? '#ddd' : '#fff'
          };">
          ${tab.title}
        </button>
      `
    )
    .join("");

  // Build tab panels HTML
  const tabPanels = tabs
    .map(
      (tab, i) => `
        <div role="tabpanel" id="${tab.id}" ${
        i === 0 ? "" : 'hidden="true"'
      } style="border:1px solid #000; padding:10px; margin-top:5px;">
          ${tab.content}
        </div>
      `
    )
    .join("");

  // Full HTML document
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Generated Tabs</title>
</head>
<body style="font-family:sans-serif; padding:20px;">
  <div style="position:fixed; top:10px; left:10px; font-weight:bold;">${studentNumber}</div>
  <h1>Tabs Example</h1>
  <div role="tablist">${tabButtons}</div>
  ${tabPanels}

  <script>
    const tabs = document.querySelectorAll('[role="tab"]');
    const panels = document.querySelectorAll('[role="tabpanel"]');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // Update selected state
        tabs.forEach(t => {
          t.setAttribute('aria-selected', 'false');
          t.style.background = '#fff';
        });
        tab.setAttribute('aria-selected', 'true');
        tab.style.background = '#ddd';

        // Show/Hide panels
        panels.forEach(p => p.hidden = true);
        document.getElementById(tab.dataset.tab).hidden = false;
      });
    });
  </script>
</body>
</html>
  `;
}
