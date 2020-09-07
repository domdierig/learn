namespace Bank
{
	public class Transaction
	{
		public int targetKntNr { get; private set; }
		public int targetBetrag { get; private set; }

		public Transaction(int targetKntNr, int targetBetrag)
		{
			this.targetKntNr = targetKntNr;
			this.targetBetrag = targetBetrag;
		}
	}
}