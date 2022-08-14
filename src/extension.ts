import { ExtensionContext, StatusBarAlignment, window } from 'vscode';

export function activate(context: ExtensionContext) {
  const statusBarItem = window.createStatusBarItem(StatusBarAlignment.Right, 50);
  statusBarItem.text = '$(color-mode)';
  statusBarItem.tooltip = 'Toggle dark theme';
  statusBarItem.command = 'workbench.action.toggleLightDarkThemes';
  statusBarItem.show();
   context.subscriptions.push(statusBarItem);
}
