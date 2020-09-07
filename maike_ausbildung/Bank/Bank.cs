using System;
using System.Collections.Generic;

namespace Bank
{
	public class Bank
	{
		public int nextKdnNr { get; private set; }
		public int nextKntNr { get; private set; }
		public IDictionary<int, Kunde> KundenStamm { get; private set; }

		public Bank()
		{
			this.nextKdnNr = 1;
			this.nextKntNr = 1;
			this.KundenStamm = new Dictionary<int, Kunde>();
		}

		public void addKunde(string name, string adresse)
		{
			this.KundenStamm.Add(this.nextKdnNr, new Kunde(nextKdnNr, name, adresse));
			this.nextKdnNr++;
			Console.WriteLine();
		}

		public void addKontoToKunde(int kndNr, int betrag)
		{
			if (!this.KundenStamm.ContainsKey(kndNr))
			{
				Console.WriteLine("Kunde unbekannt");
				return;
			}

			Konto newKonto = new Konto(this.nextKntNr, betrag);
			this.KundenStamm[kndNr].kontoEröffnen(newKonto);
			this.nextKntNr++;
			Console.WriteLine();
		}

		public void printAllKunden()
		{
			foreach (int key in this.KundenStamm.Keys)
			{
				Console.WriteLine($"kndNr: {this.KundenStamm[key].KdnNr.ToString().PadLeft(3)}  -  Name: {this.KundenStamm[key].Name}");
			}
			Console.WriteLine();
		}

		public void printKonten(int kndNr)
		{
			if (!this.KundenStamm.ContainsKey(kndNr))
			{
				Console.WriteLine("kunde unbekannt");
				return;
			}
			Kunde kunde = this.KundenStamm[kndNr];
			Console.WriteLine($"\nkonten für kunde:{kunde.Name}\n");
			kunde.printKonten();
		}

		public void addMoneyToKnt(int kdnNr, int kntNr, int betrag)
		{
			if (!this.KundenStamm.ContainsKey(kdnNr))
			{
				Console.WriteLine("kunde unbekannt");
				return;
			}

			if (!this.KundenStamm[kdnNr].existiertKonto(kntNr))
			{
				Console.WriteLine("konto unbekannt");
				return;
			}
			Transaction t = new Transaction(kntNr, betrag);
			int newStand = this.KundenStamm[kdnNr].einzahlen(t);
			Console.WriteLine($"neuer Kontostand: {newStand}");
		}

		public void removeMoneyFromKnt(int kdnNr, int kntNr, int betrag)
		{
			if (!this.KundenStamm.ContainsKey(kdnNr))
			{
				Console.WriteLine("kunde unbekannt");
				return;
			}

			if (!this.KundenStamm[kdnNr].existiertKonto(kntNr))
			{
				Console.WriteLine("konto unbekannt");
				return;
			}
			Transaction t = new Transaction(kntNr, betrag);
			int newStand = this.KundenStamm[kdnNr].abheben(t);
			Console.WriteLine($"neuer Kontostand: {newStand}");
		}

		public void transferMoney(Transfer moneyTransfer)
		{
			this.KundenStamm[moneyTransfer.OriginKdnNr].abheben(moneyTransfer.OriginTransaction);
			this.KundenStamm[moneyTransfer.TargetKdnNr].einzahlen(moneyTransfer.TargetTransaction);
		}
	}
}