export const USER_SEED = [
    {
      "_id": "679f7d1a1e60cbf987a78c11",
      "accounts": [123, 321, 222,],
      "name": "John Doe",
      "total": 0
    }
  ]

export const ACCOUNTS_SEED = [
    {
      "_id": "67a2ac2b8f3af807d1ba58b1",
      "account_num": 123,
      "type": "Checking",
      "date_opened": "2025-02-05T00:09:15.649Z",
      "date_closed": null,
      "starting_amount": 0,
      "current_amount": 3000,
      "bucket": [
        "67a2c6527ab0e405be35848f",
        "67a2f153400f8459b315069c",
        "67a2f1a8400f8459b315069d"
        

      ],
      "__v": 0
    },
    {
      "_id": "67a2ade88f3af807d1ba58b9",
      "account_num": 321,
      "type": "Savings",
      "date_opened": "2025-02-05T00:16:40.551Z",
      "date_closed": null,
      "starting_amount": 400,
      "current_amount": 50,
      "bucket": [
        "67a2c6f47ab0e405be3584ac"
      ],
      "__v": 0
    },
    {
      "_id": "67a4723574feaa3554a352a1",
      "account_num": 222,
      "type": null,
      "date_opened": "2025-02-06T08:26:29.413Z",
      "date_closed": null,
      "starting_amount": 0,
      "current_amount": 0,
      "bucket": [],
      "__v": 0
    },
  ]

export const TRANSACTION_SEED = [
    {
      "_id": "67a2c6527ab0e405be35848f",
      "account_id": 123,
      "start_date": "2025-02-05T02:00:49.835Z",
      "end_date": "2025-02-19T02:00:49.835Z",
      "transactions": [
        {
          "date": "2025-02-05T02:00:49.835Z",
          "amount": 1000,
          "trans_type": "withdrawl",
          "comp_name": "Steam Games",
          "status": "pending",
          "_id": "67a2c6527ab0e405be358490"
        },
        {
          "date": "2025-02-05T02:01:22.456Z",
          "amount": 200,
          "trans_type": "Deposit",
          "comp_name": "7 Eleven Payroll",
          "status": "pending",
          "_id": "67a2c6727ab0e405be358495"
        },
        {
          "date": "2025-02-05T02:02:25.581Z",
          "amount": 100,
          "trans_type": "Withdrawl",
          "comp_name": "Adobe Creative Cloud",
          "status": "pending",
          "_id": "67a2c6b17ab0e405be35849c"
        },
        {
          "date": "2025-02-05T02:02:52.865Z",
          "amount": 50,
          "trans_type": "Deposit",
          "comp_name": "Microsoft",
          "status": "pending",
          "_id": "67a2c6cc7ab0e405be3584a5"
        },
        {
          "date": "2025-02-06T16:03:35.866Z",
          "amount": 400,
          "trans_type": "Withdrawl",
          "comp_name": "Perscholas",
          "status": "pending",
          "_id": "67a4dd571e5146ad964aa062"
        }
      ],
      "__v": 0
    },
    {
      "_id": "67a2c6f47ab0e405be3584ac",
      "account_id": 321,
      "start_date": "2025-02-05T02:03:32.426Z",
      "end_date": "2025-02-19T02:03:32.426Z",
      "transactions": [
        {
          "date": "2025-02-05T02:03:32.426Z",
          "amount": 50,
          "trans_type": "Deposit",
          "comp_name": "Nintendo",
          "status": "pending",
          "_id": "67a2c6f47ab0e405be3584ad"
        }
      ],
      "__v": 0
    },
    {
      "_id": "67a2f153400f8459b315069c",
      "account_id": 123,
      "start_date": "2025-01-22T02:00:49.835Z",
      "end_date": "2025-02-05T02:00:49.835Z",
      "transactions": [
        {
          "date": "2025-01-22T02:00:49.835Z",
          "amount": 3000,
          "trans_type": "withdrawl",
          "comp_name": "Steam Games",
          "status": "pending",
          "_id": "67a2c6527ab0e405be358490"
        },
        {
          "date": "2025-01-22T02:01:22.456Z",
          "amount": 200,
          "trans_type": "Deposit",
          "comp_name": "7 Eleven Payroll",
          "status": "pending",
          "_id": "67a2c6727ab0e405be358495"
        },
        {
          "date": "2025-01-22T02:02:25.581Z",
          "amount": 100,
          "trans_type": "Withdrawl",
          "comp_name": "Adobe Creative Cloud",
          "status": "pending",
          "_id": "67a2c6b17ab0e405be35849c"
        },
        {
          "date": "2025-01-22T02:02:52.865Z",
          "amount": 50,
          "trans_type": "Deposit",
          "comp_name": "Microsoft",
          "status": "pending",
          "_id": "67a2c6cc7ab0e405be3584a5"
        }
      ],
      "__v": 0
    },
    {
      "_id": "67a2f1a8400f8459b315069d",
      "account_id": 123,
      "start_date": "2025-01-06T02:00:49.835Z",
      "end_date": "2025-01-20T02:00:49.835Z",
      "transactions": [
        {
          "date": "2025-01-06T02:00:49.835Z",
          "amount": 3000,
          "trans_type": "withdrawl",
          "comp_name": "Walmart Sucks",
          "status": "pending",
          "_id": "67a2c6527ab0e405be358490"
        },
        {
          "date": "2025-01-06T02:01:22.456Z",
          "amount": 200,
          "trans_type": "Deposit",
          "comp_name": "7 Eleven Payroll",
          "status": "pending",
          "_id": "67a2c6727ab0e405be358495"
        },
        {
          "date": "2025-01-06T02:02:25.581Z",
          "amount": 100,
          "trans_type": "Withdrawl",
          "comp_name": "Adobe Creative Cloud",
          "status": "pending",
          "_id": "67a2c6b17ab0e405be35849c"
        },
        {
          "date": "2025-01-06T02:02:52.865Z",
          "amount": 50,
          "trans_type": "Deposit",
          "comp_name": "Microsoft",
          "status": "pending",
          "_id": "67a2c6cc7ab0e405be3584a5"
        }
      ],
      "__v": 0
    },
  ]