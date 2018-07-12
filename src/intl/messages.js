// @flow

/**
 * Enter messages here.
 *
 * Please keep keys valid JavaScript identifiers.
 * Please don't add flow type annotation
 *
 * @type {Object.<string, (string | {message: string, description: string})>}
 */
export const messages = {
  run: 'Run',
  reboot: {
    message: 'Reboot',
    description: 'Toolbar button to reboot a VM',
  },
  virtualMachines: 'Virtual Machines',
  addNewVm: 'Create Virtual Machine',
  failedToStartVm: 'Failed to start the VM',
  failedToRestartVm: 'Failed to restart the VM',
  failedToShutdownVm: 'Failed to shutdown the VM',
  failedToGetVmConsole: 'Failed to get the VM console',
  failedToSuspendVm: 'Failed to suspend the VM',
  failedToRemoveVm: 'Failed to remove the VM',
  failedToRetrieveVmIcon: 'Failed to retrieve VM icon',
  failedToRetrieveVmConsoleDetails: 'Failed to retrieve VM console details',
  failedToRetrieveListOfVmConsoles: 'Failed to retrieve list of VM consoles',
  failedToRetrieveDiskDetails: 'Failed to retrieve disk details',
  failedToRetrieveVmDisks: 'Failed to retrieve VM disks',
  failedToRetrieveIsoStorages: 'Failed to retrieve ISO storages',
  failedToRetrieveVmDetails: 'Failed to retrieve VM details',
  failedToChangeVmIcon: 'Failed to change VM icon',
  failedToChangeVmIconToDefault: 'Failed to change VM icon to default',
  actionFailed: '{action} failed',
  pleaseLogIn: 'Please log in',
  pleaseLogInTripleDot: 'Please log in ...',
  vmPortal: 'VM Portal',
  unknown: {
    message: 'unknown',
    description: 'followed by "version" to create "unknown version"',
  },
  unknownDatacenter: {
    message: 'unknown',
    description: 'unknown datacenter',
  },
  htmlUnsupportedOvirtVersionFoundButVersionAtLeastRequired: '<strong>Unsupported {version} {productName} version,</strong> found but version at least {requiredVersion} is required.',
  authorizationExpired: 'Authorization expired. The page is going to be reloaded to re-login.',
  useCtrlAltEnd: 'Use Ctrl+Alt+End',
  mapCtrlAltDelKeyboardShortcutToCtrlAltEnd: 'Map Ctrl + Alt + Del keyboard shortcut to Ctrl + Alt + End',
  noVmAvailable: 'No VM available.',
  noVmAvailableForLoggedUser: 'No VM is available for the logged user.',
  consoleInUseContinue: 'Console in use, continue?',
  yes: 'Yes',
  cancel: 'Cancel',
  newNic: {
    message: 'New',
    description: 'New NIC',
  },
  save: 'Save',
  preserveDisks: 'Preserve disks',
  removeVmQustion: 'Remove the VM?',
  removeVm: 'Remove the VM',
  remove: 'Remove',
  force: 'Force',
  openProtocolConsole: 'Open {protocol} Console',
  options: 'Options',
  startVm: 'Start the VM',
  suspendVm: 'Suspend the VM',
  suspend: 'Suspend',
  suspendVmQuestion: 'Are you sure you want to Suspend the VM?',
  shutdown: 'Shutdown',
  shutdownVm: 'Shutdown the VM',
  shutdownVmQuestion: 'Are you sure you want to Shutdown the VM?',
  smartcardEnabled: 'Smartcard enabled:',
  rebootVm: 'Reboot the VM',
  rebootVmQuestion: 'Are you sure you want to Restart the VM?',
  console: 'Console',
  edit: 'Edit',
  editVm: 'Edit the VM',
  noError: 'No error',
  vmHasPendingConfigurationChanges: 'The virtual machine has pending configuration changes. To take effect, please reboot the virtual machine.',
  pendingChanges: 'Pending Changes',
  vmType_desktop: 'Desktop',
  vmType_server: 'Server',
  vmType_highPerformance: 'High Performance',
  ifVmIsRunningClickToAccessItsGraphicsConsole: 'If the virtual machine is running, click the protocol name to access its Graphical Console.',
  noDisks: 'no disks',
  htmlPleaseReferToDocumentationForMoreInformation: 'Please refer to <a href="{documentationUrl}" target="_blank">documentation</a> for more information.',
  actualStateVmIsIn: 'The actual state the virtual machine is in.',
  state: 'State',
  optionalUserDescriptionOfVm: 'Optional user description of the virtual machine.',
  description: 'Description',
  groupOfHostsVmCanBeRunningOn: 'Group of hosts the virtual machine can be running on.',
  cluster: 'Cluster',
  containsConfigurationAndDisksWhichWillBeUsedToCreateThisVm: 'Contains the configuration and disks which will be used to create this virtual machine. Please customize as needed.',
  template: 'Template',
  operatingSystemInstalledOnVm: 'Operating system installed on the virtual machine.',
  operatingSystem: 'Operating System',
  typeOfWorkloadVmConfigurationIsOptimizedFor: 'Type of workload the virtual machine configuration is optimized for.',
  optimizedFor: 'Optimized for',
  definedMemory: 'Defined Memory',
  totalMemoryVmWillBeEquippedWith: 'Total memory the virtual machine will be equipped with.',
  lowOVirtVersion: 'SSH keys can not be managed with recent oVirt <strong>{apiVersion}</strong> version. Please upgrade oVirt to <strong>4.2</strong> or higher.',
  publicSSHKey: 'Specify public key for access to guest serial console via SSH authentication.',
  SSHKey: 'SSH Key',
  icon: 'Icon',
  customIcon: 'Custom icon of the virtual machine.',
  upload: 'Upload',
  defaultButton: 'Default',
  uploadIconFilesizeTooLarge: 'Image size should be {maxIconSize} KiB or less.',
  uploadIconNotImage: 'Icon should be an image.',
  cpus: 'CPUs',
  totalCountOfVirtualProcessorsVmWillBeEquippedWith: 'Total count of virtual processors the virtual machine will be equipped with.',
  fullyQualifiedDomainName: 'Fully Qualified Domain Name (FQDN) of the virtual machine. Please note, guest agent must be installed within the virtual machine to retrieve this value.',
  address: 'Address',
  currentlyInsertedIsoInCdDrive: 'Currently inserted ISO in CD drive',
  cd: 'CD',
  storageConnectedToVm: 'Storage connected to the virtual machine.',
  disks: 'Disks',
  close: 'Close',
  clearMessages: 'Clear Messages',
  messages: 'Messages',
  empty: 'Empty',
  refresh: {
    message: 'Refresh',
    description: 'Reload data from server',
  },
  pleaseEnterValidVmName: 'Please enter valid virtual machine name. Only lower-case and upper-case letters, numbers, \'_\', \'-\', \'.\' are allowed.',
  about: {
    message: 'About',
    description: 'About application',
  },
  logOut: 'Log out',
  noMessages: 'There are no notifications to display.',
  enum_VmStatus_up: {
    message: 'Running',
    description: 'VM is running. One of states of a virtual machine. Other are e.g. Up, Down, Powering-Up',
  },
  enum_VmStatus_down: {
    message: 'Off',
    description: 'VM is turned off. One of states of a virtual machine. Other are e.g. Up, Down, Powering-Up',
  },
  enum_VmStatus_powering_up: {
    message: 'Powering up',
    description: 'VM is starting. One of states of a virtual machine. Other are e.g. Up, Down, Powering-Up',
  },
  enum_VmStatus_paused: {
    message: 'Paused',
    description: 'VM is paused. One of states of a virtual machine. Other are e.g. Up, Down, Powering-Up',
  },
  enum_VmStatus_migrating: {
    message: 'Migrating',
    description: 'VM is migrating from one host machine to another host machine. One of states of a virtual machine. Other are e.g. Up, Down, Powering-Up',
  },
  enum_VmStatus_unknown: {
    message: 'Unknown',
    description: 'VM is in unknown state. Connection hot hypervisor is probably broken. One of states of a virtual machine. Other are e.g. Up, Down, Powering-Up',
  },
  enum_VmStatus_wait_for_launch: {
    message: 'Waiting for launch',
    description: 'VM is down but planned to started. be One of states of a virtual machine. Other are e.g. Up, Down, Powering-Up',
  },
  enum_VmStatus_reboot_in_progress: {
    message: 'Reboot in progress',
    description: 'One of states of a virtual machine. Other are e.g. Up, Down, Powering-Up',
  },
  enum_VmStatus_saving_state: {
    message: 'Saving state',
    description: 'Being hibernated. One of states of a virtual machine. Other are e.g. Up, Down, Powering-Up',
  },
  enum_VmStatus_restoring_state: {
    message: 'Restoring state',
    description: 'Waking up from hibernation. One of states of a virtual machine. Other are e.g. Up, Down, Powering-Up',
  },
  enum_VmStatus_suspended: {
    message: 'Asleep',
    description: 'Hibernated. One of states of a virtual machine. Other are e.g. Up, Down, Powering-Up',
  },
  enum_VmStatus_image_locked: {
    message: 'Image locked',
    description: 'Disk image is locked. One of states of a virtual machine. Other are e.g. Up, Down, Powering-Up',
  },
  enum_VmStatus_powering_down: {
    message: 'Powering down',
    description: 'VM is being turned off. One of states of a virtual machine. Other are e.g. Up, Down, Powering-Up',
  },
  enum_VmStatus_unassigned: {
    message: 'Unassigned',
    description: 'Error when obtaining virtual machine status. One of states of a virtual machine. Other are e.g. Up, Down, Powering-Up',
  },
  clickForHelp: 'Click for help',
  hostConsole: {
    message: 'Host Console',
    description: 'Label of link to the Cockpit app',
  },
  connectAutomatically: 'Connect automatically',
  fullScreen: 'Fullscreen',
  createANewVm: 'Create A New Virtual Machine',
  name: {
    message: 'Name',
    description: 'Virtual machine name',
  },
  uniqueNameOfTheVirtualMachine: 'Unique name of the virtual machine.',
  enterVmName: 'Enter VM Name',
  enterVmDescription: 'Enter VM Description (optional)',
  vmMemory: 'VM Memory',
  changeCd: 'Change CD.',
  updateVm: 'Update VM',
  createVm: 'Create VM',
  on: 'On',
  off: 'Off',
  bootMenu: 'Boot Menu',
  bootMenuTooltip: 'Boot menu allows to select bootable device. It is accessible from a console.',
  cloudInit: {
    message: 'Cloud-Init',
    description: 'Name of technology allowing to initialize operating system installation. Most likely not translatable.',
  },
  cloudInitTooltip: 'Set up early initialization of Linux virtual machine using cloud-init.',
  hostName: 'Hostname',
  hostNameTooltip: 'Virtual Machine hostname.',
  sshAuthorizedKeys: 'SSH Authorized Keys',
  sshAuthorizedKeysTooltip: 'New line separated public SSH keys allowing for passwordless remote login.',
  loadingTripleDot: {
    message: 'Loading ...',
    description: 'Pending request to the server indicator label.',
  },
  thisOperationCantBeUndone: 'This operation cannot be undone.',
  areYouSureYouWantToDeleteDisk: 'Are you sure you want to delete disk {diskName}?',
  delete: 'Delete',
  confirmDelete: 'Confirm delete',
  diskCapacity: 'Disk Capacity',
  more: {
    message: 'more',
    description: 'more/less pair used to control collapsable long listing',
  },
  less: {
    message: 'less',
    description: 'more/less pair used to control collapsable long listing',
  },
  new: {
    message: 'New',
    description: 'New disk',
  },
  restore: {
    message: 'Restore',
    description: 'Restore snapshot',
  },
  confirmRestore: 'Confirm restore',
  ok: 'OK',
  createNewDisk: 'Create New Disk',
  diskSizeHasToBeAPositiveInteger: 'Disk size has to be a positive integer.',
  noActiveStorageDomainInDataCenter: 'There is no active data storage domain in data center "{dataCenterName}"',
  alias: {
    message: 'Alias',
    description: 'In sense of "human friendly name"',
  },
  storageDomain: {
    message: 'Storage domain',
    description: 'An entity in the system where disks of virtual machines are stored. Abstraction of external file/block storages.',
  },
  size: {
    message: 'Size',
    description: '... of disk of virtual machine',
  },
  errorWhileCreatingNewDisk: 'Error while creating new disk:',
  notEditableForPoolsOrPoolVms: 'Not editable for Pools or pool VMs.',
  nic: 'Network interfaces',
  noNics: 'no NICs',
  addNewNic: 'Add new NIC',
  vnicProfile: 'VNIC Profile',
  areYouSureYouWantToDeleteNic: 'Are you sure you want to delete NIC {nicName}?',
  nicsTooltip: 'Connected VM network interfaces.',
  network: 'Network',
  noNetwork: 'No network',
  vnicProfileEmpty: '<Empty>',
  bootMenuWarning: 'All changes will take effect after reboot only.',
  bootSequence: 'Boot Sequence',
  firstDevice: 'First Device',
  secondDevice: 'Second Device',
  bootSequenceTooltip: 'Device order in which VM will search OS for running.',
  firstDeviceTooltip: 'First device in order.',
  secondDeviceTooltip: 'Second device in order.',
  hdBoot: 'Hard Disk',
  networkBoot: 'Network (PXE)',
  cdromBoot: 'CD-ROM',
  snapshot: 'Snapshots',
  snapshotsTooltip: 'VM snapshots.',
  noSnapshots: 'no snapshots',
  newSnapshot: 'New snapshot',
  snapshotInfo: 'All attached disks will be included in the snapshot. Content of memory will be included only if VM is running.',
  addNewSnapshot: 'Add new snapshot',
  areYouSureYouWantToDeleteSnapshot: 'Are you sure you want to delete snapshot {snapshotName}?',
  areYouSureYouWantToRestoreSnapshot: 'Are you sure you want to restore snapshot {snapshotName}?',
  emptySnapshotDescription: 'Snapshot description is missing.',
  isPersistMemorySnapshot: 'Content of the memory of the virtual machine is included in the snapshot.',
  clear: 'Clear',
  clearAll: 'Clear all',
  displayAll: 'Display all',
  unsavedChangesTitle: {
    message: 'Dialog contains unsaved changes',
    description: 'Title of modal dialog opened when a user tried to navigate off an editor page after changes have been made.',
  },
  unsavedChangesConfirmMessage: {
    message: 'Are you sure you want to drop your changes?',
    description: 'Message in the modal dialog opened when a user tried to navigate off an editor page after changes have been made.',
  },
}

export type MessageIdType = $Keys<typeof messages>
