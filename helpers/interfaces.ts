

export interface ListDataInterest {
  id: number;
  current_year: number;
  total_gains: string;
  gain_for_year: number;
  gain_without_berore_gain: string;
  mouth_gain: string;
}

export interface DataCalculate {
  id: string;
  savings: string;
  savings_now: string;
  years: number;
  interest: number;
  total_gain: string;
  calculate_years: ListDataInterest[];
}