import { RouteObject } from 'react-router-dom'

// Load/Update pages
import LeaveApplicationManagement from './pages/load/LeaveApplicationManagement'
import LeaveCreditsRecord from './pages/load/LeaveCreditsRecord'
import LeaveWithoutPay from './pages/load/LeaveWithoutPay'
import OnLeaveEmployees from './pages/load/OnLeaveEmployees'

// Process/Posting pages
import GenerateTransactionMaster from './pages/process/GenerateTransactionMaster'
import AbsencesPosting from './pages/process/AbsencesPosting'
import FinalPosting from './pages/process/FinalPosting'

// Other pages
import LeaveApplication from './pages/LeaveApplication'
import LeaveType from './pages/LeaveType'
import Reports from './pages/Reports'

export const routes: RouteObject[] = [
  {
    path: '/load/leave-application-management',
    element: <LeaveApplicationManagement />,
  },
  {
    path: '/load/leave-credits-record',
    element: <LeaveCreditsRecord />,
  },
  {
    path: '/load/leave-without-pay',
    element: <LeaveWithoutPay />,
  },
  {
    path: '/load/on-leave-employees',
    element: <OnLeaveEmployees />,
  },
  {
    path: '/process/generate-transaction',
    element: <GenerateTransactionMaster />,
  },
  {
    path: '/process/absences-posting',
    element: <AbsencesPosting />,
  },
  {
    path: '/process/final-posting',
    element: <FinalPosting />,
  },
  {
    path: '/leave-application',
    element: <LeaveApplication />,
  },
  {
    path: '/leave-type',
    element: <LeaveType />,
  },
  {
    path: '/reports',
    element: <Reports />,
  },
]

// Map menu keys to routes
export const menuKeyToRoute: Record<string, string> = {
  '1-1': '/load/leave-application-management',
  '1-2': '/load/leave-credits-record',
  '1-3': '/load/leave-without-pay',
  '1-4': '/load/on-leave-employees',
  '2-1': '/process/generate-transaction',
  '2-2': '/process/absences-posting',
  '2-3': '/process/final-posting',
  '3': '/leave-application',
  '4': '/leave-type',
  '5': '/reports',
}
