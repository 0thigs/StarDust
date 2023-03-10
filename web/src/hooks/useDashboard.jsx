import { useContext } from 'react';
import { DashboardContext } from '../contexts/DashboardContext';

export function useDashboard() {
  const context = useContext(DashboardContext);
  return context;
}
