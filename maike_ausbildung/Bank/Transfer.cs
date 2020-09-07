namespace Bank
{
	public class Transfer
	{
		public Transaction TargetTransaction { get; private set; }
		public int TargetKdnNr { get; private set; }
		public Transaction OriginTransaction { get; private set; }
		public int OriginKdnNr { get; private set; }

		public Transfer(Transaction targetTransaction, int targetKdnNr, Transaction originTransaction, int originKdnNr)
		{
			this.TargetTransaction = targetTransaction;
			this.TargetKdnNr = targetKdnNr;
			this.OriginKdnNr = originKdnNr;
			this.OriginTransaction = originTransaction;
		}
	}
}