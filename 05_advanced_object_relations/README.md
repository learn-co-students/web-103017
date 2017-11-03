# Object Relations

---
* **Relationships**
  * ~~Inheritance ("is a")~~
  * ~~Association ("has one/has many/belongs to")~~
  * Advanced associations("has many ... through")
  * Composition ("is part of a")
* **Modeling**
  * Draw out models (classes)
  * Draw out attributes
  * Draw out relationships
* **Adding relationships to our BankAccount model**
  * Related models
    * Bank
    * Customer
    * Account
      * Checking Account
      * Savings Account
    * Transaction
      * Withdrawal
      * Deposit
      * Charge
      * Transfer
    * Loan
    * Bank
    * Branch
    * City
* **Folder structure**
  * app
    * **helpers**
      * alertable.md
    * models
      * account.rb
      * bank.rb
      * customer.rb
      * ...
  * config
    * environment.rb
  * bin
    * Run
  * Gemfile

* Relationships
  * CheckingAccount and SavingsAccount inherit from BankAccount
    * ![inheritance.png](inheritance.png)
  * Customer has many accounts
    * ![association.png](association.png)
