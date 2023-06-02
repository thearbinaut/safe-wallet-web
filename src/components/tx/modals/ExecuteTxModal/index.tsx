import React from 'react'

import type { TxModalProps } from '@/components/tx/TxModal'
import TxModal from '@/components/tx/TxModal'
import type { TransactionSummary } from '@safe-global/safe-gateway-typescript-sdk'
import type { TxStepperProps } from '@/components/tx/TxStepper/useTxStepper'
import ConfirmProposedTx from '@/components/tx-flow/flows/ConfirmTx/ConfirmProposedTx'

export const ExecuteTxSteps: TxStepperProps['steps'] = [
  {
    label: 'Execute transaction',
    render: (data) => <ConfirmProposedTx txSummary={data as TransactionSummary} />,
  },
]

const ExecuteTxModal = (props: Omit<TxModalProps, 'steps'>) => {
  return <TxModal {...props} steps={ExecuteTxSteps} />
}

export default ExecuteTxModal
