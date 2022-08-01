import styled from 'styled-components'

export const HistoryContainer = styled.div`
  flex: 1;
  padding: 3.5rem; /* 56px */

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.5rem; /* 24px */
    color: ${(props) => props.theme['gray-100']};
  }
`

export const HistoryList = styled.div`
  flex: 1;
  overflow: hidden;
  margin-top: 2rem; /* 32px */

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;

    th {
      background-color: ${(props) => props.theme['gray-600']};
      padding: 1rem;
      text-align: left;
      color: ${(props) => props.theme['gray-100']};
      font-size: 0.875rem; /* 14px */
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem; /* 24px */
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem; /* 24px */
      }
    }

    td {
      background-color: ${(props) => props.theme['gray-700']};
      border-top: 4px solid ${(props) => props.theme['gray-800']};
      padding: 1rem; /* 16px */
      font-size: 0.875rem; /* 14px */

      &:first-child {
        width: 50%;
        padding-left: 1.5rem; /* 24px */
      }

      &:last-child {
        padding-right: 1.5rem; /* 24px */
      }
    }
  }
`

const STATUS_COLORS = {
  yellow: 'yellow-500',
  green: 'green-500',
  red: 'red-500',
} as const

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem; /* 8px */

  &::before {
    content: '';
    width: 0.5rem; /* 8px */
    height: 0.5rem; /* 8px */
    border-radius: 9999px;
    background: ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};
  }
`
