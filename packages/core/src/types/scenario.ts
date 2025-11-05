export interface Scenario {
  id: string;
  title: string;
  steps: ScenarioStep[];
}

export interface ScenarioStep {
  id: string;
  description: string;
  action: string;
}
