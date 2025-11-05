export interface Device {
  id: string;
  name: string;
  type: string;
}

export interface DeviceConfig {
  device: Device;
  settings: Record<string, any>;
}
