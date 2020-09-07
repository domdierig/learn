using System;

namespace Bank
{
	public class Konto
	{
		public int KntNr { get; private set; }
		public int Stand { get; private set; }

		public Konto(int kntNr, int betrag)
		{
			this.KntNr = kntNr;
			this.Stand = betrag;
		}

		public int einzahlen(Transaction t)
		{
			this.Stand += t.targetBetrag;
			return this.Stand;
		}

		public int auszahlen(Transaction t)
		{
			this.Stand -= t.targetBetrag;
			return this.Stand;
		}
	}
}