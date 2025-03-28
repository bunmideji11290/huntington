import { Account } from '@/utils/types';

export const mockAccounts: Account[] = [
  {
    account_id: 'ACC001',
    holder: {
      firstName: 'Andrew',
      lastName: 'McNulty',
      mobileNumber: '+1-224-463-7589',
      nickName: 'jford',
      gender: 'Male',
      email: 'a*@gmail.com',
      jointNames: '',
      username: 'sample1',
      password: 'sample1'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 115678.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, Please enter the code sent to you',
      transaction_code: '252118',
      wireDate: true
    },
    transaction_history: [
      {
        transaction_id: 'TXN001',
        dateTime: 'June 10 2024, 3:32:32 am',
        description: "Grimms supply holding's",
        status: 'Success',
        amount_usd: 58000.0,
        account_no: '****5009'
      },
      {
        transaction_id: 'TXN002',
        dateTime: 'April 15 2023, 1:04:02 pm',
        description: 'Transfer from TABITHA MARTEL',
        status: 'Success',
        amount_usd: 250000.0,
        account_no: '****2930'
      },
      {
        transaction_id: 'TXN003',
        dateTime: 'February 8 2022, 10:11:22 am',
        description: 'Transfer from NICHOLAS DUKE',
        status: 'Success',
        amount_usd: 650000.0,
        account_no: '****3839'
      },
      {
        transaction_id: 'TXN004',
        dateTime: 'July 2 2021, 7:08:32 am',
        description: 'Transfer from BRANDON PERKINS',
        status: 'Success',
        amount_usd: 175000.0,
        account_no: '****3249'
      },
      {
        transaction_id: 'TXN005',
        dateTime: 'November 23 2020, 1:15:02 pm',
        description: "Sinlair's Store - Trx",
        status: 'Success',
        amount_usd: -650.0,
        account_no: '****1403'
      },
      {
        transaction_id: 'TXN006',
        dateTime: 'April 23 2020, 8:15:02 pm',
        description: 'Project Milestone Payment',
        status: 'Success',
        amount_usd: 65000.0,
        account_no: '****1403'
      },
      {
        transaction_id: 'TXN007',
        dateTime: 'March 15, 2019, 7:20:15 am',
        description: 'Project Completion Bonus',
        status: 'Success',
        amount_usd: 18000.0,
        account_no: '****5012'
      },
      {
        transaction_id: 'TXN008',
        dateTime: 'February 12, 2019, 10:45:00 am',
        description: 'Walmart',
        status: 'Success',
        amount_usd: -4000.0,
        account_no: '****5013'
      },
      {
        transaction_id: 'TXN009',
        dateTime: 'April 16, 2019, 2:45:15 pm',
        description: 'AT&T',
        status: 'Success',
        amount_usd: -400.0,
        account_no: '****5007'
      },
      {
        transaction_id: 'TXN010',
        dateTime: 'April 23 2020, 8:15:02 pm',
        description: 'Project Milestone Payment',
        status: 'Success',
        amount_usd: 65000.0,
        account_no: '****1403'
      },
      {
        transaction_id: 'TXN011',
        dateTime: 'March 15, 2019, 7:20:15 am',
        description: 'Project Completion Bonus',
        status: 'Success',
        amount_usd: 18000.0,
        account_no: '****5012'
      },
      {
        transaction_id: 'TXN012',
        dateTime: 'February 12, 2019, 10:45:00 am',
        description: 'Walmart',
        status: 'Success',
        amount_usd: -4000.0,
        account_no: '****5013'
      },
      {
        transaction_id: 'TXN013',
        dateTime: 'April 16, 2019, 2:45:15 pm',
        description: 'AT&T',
        status: 'Success',
        amount_usd: -400.0,
        account_no: '****5007'
      },
      {
        transaction_id: 'TXN014',
        dateTime: 'April 23 2020, 8:15:02 pm',
        description: 'Project Milestone Payment',
        status: 'Success',
        amount_usd: 65000.0,
        account_no: '****1403'
      },
      {
        transaction_id: 'TXN015',
        dateTime: 'March 15, 2019, 7:20:15 am',
        description: 'Project Completion Bonus',
        status: 'Success',
        amount_usd: 18000.0,
        account_no: '****5012'
      },
      {
        transaction_id: 'TXN016',
        dateTime: 'February 12, 2019, 10:45:00 am',
        description: 'Walmart',
        status: 'Success',
        amount_usd: -4000.0,
        account_no: '****5013'
      },
      {
        transaction_id: 'TXN017',
        dateTime: 'April 16, 2019, 2:45:15 pm',
        description: 'AT&T',
        status: 'Success',
        amount_usd: -400.0,
        account_no: '****5007'
      }
    ]
  },
  {
    account_id: 'ACC002',
    showModal: true,
    holder: {
      firstName: 'Chloe Parker',
      lastName: '',
      mobileNumber: '***-***-****',
      email: 'c*@gmail.com',
      createdOn: '3/16/2025', // m/d/y
      username: 'Cparker55',
      password: 'Mercedes1970$'
    },
    bank_details: {
      account_type: 'Checking',
      account_number: '',
      routing_number: '',
      balance_usd: 1367415.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '252118',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'March 18, 2025',
        description: 'Wire Transfer from Macegroup - XXXXXX5567',
        status: 'Success',
        amount_usd: 1359015.0
      },
      {
        dateTime: 'March 18, 2025',
        description: 'Invoice from Cargill Construction - XXXXXX4018',
        status: 'Success',
        amount_usd: 8400.0
      },
      {
        dateTime: 'March 17, 2025',
        description: 'Business Expense - Halliburton Construction - XXXXXX2937',
        status: 'Success',
        amount_usd: -3100.25
      },
      {
        dateTime: 'March 16, 2025',
        description: 'Deposit from Bechtel Construction - XXXXXX7623',
        status: 'Success',
        amount_usd: 7200.0
      },
      {
        dateTime: 'March 15, 2025',
        description: 'Payment to Chevron Oil & Gas - XXXXXX9473',
        status: 'Success',
        amount_usd: -2100.6
      },
      {
        dateTime: 'March 14, 2025',
        description: 'Deposit from John Deere Farms - XXXXXX6825',
        status: 'Success',
        amount_usd: 5000.0
      },
      {
        dateTime: 'March 13, 2025',
        description: 'Invoice Payment to Ford Motors - XXXXXX3129',
        status: 'Success',
        amount_usd: -4500.75
      },
      {
        dateTime: 'March 12, 2025',
        description: 'Payment to Turner Construction - XXXXXX5743',
        status: 'Success',
        amount_usd: -3200.0
      },
      {
        dateTime: 'March 11, 2025',
        description: 'Airbnb Booking - XXXXXX1119',
        status: 'Success',
        amount_usd: -1643.56
      },
      {
        dateTime: 'March 11, 2025',
        description: 'American Airlines Ticket Purchase - XXXXXX9482',
        status: 'Success',
        amount_usd: -1833.0
      },
      {
        dateTime: 'March 10, 2025',
        description: 'Retail Shopping at Target - XXXXXX7629',
        status: 'Success',
        amount_usd: -189.5
      },
      {
        dateTime: 'March 9, 2025',
        description: 'Interest Credit from Bank - XXXXXX5821',
        status: 'Success',
        amount_usd: 15.75
      },
      {
        dateTime: 'March 8, 2025',
        description: 'Gas Station Purchase - XXXXXX3917',
        status: 'Success',
        amount_usd: -54.32
      },
      {
        dateTime: 'March 7, 2025',
        description: 'Dining at Olive Garden - XXXXXX1829',
        status: 'Success',
        amount_usd: -76.89
      },
      {
        dateTime: 'March 6, 2025',
        description: 'Transfer from PayPal - XXXXXX2384',
        status: 'Success',
        amount_usd: 500.0
      },
      {
        dateTime: 'March 5, 2025',
        description: 'Electronics Purchase at Best Buy - XXXXXX4720',
        status: 'Success',
        amount_usd: -899.99
      },
      {
        dateTime: 'March 4, 2025',
        description: 'Refund from Amazon - XXXXXX9175',
        status: 'Success',
        amount_usd: 75.5
      },
      {
        dateTime: 'March 3, 2025',
        description: 'Grocery Shopping at Walmart - XXXXXX8561',
        status: 'Success',
        amount_usd: -132.45
      },
      {
        dateTime: 'March 2, 2025',
        description: 'Direct Deposit from Employer - XXXXXX3429',
        status: 'Success',
        amount_usd: 3200.0
      },
      {
        dateTime: 'March 1, 2025',
        description: 'Purchase at Walmart - XXXXXX2738',
        status: 'Success',
        amount_usd: -245.67
      }
    ]     
  }
];
