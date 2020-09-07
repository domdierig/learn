using System;
using System.Collections.Generic;

namespace Bank
{
	public class Kunde
	{
		public int KdnNr { get; private set; }
		public string Name { get; private set; }
		public string Adresse { get; private set; }

		private IDictionary<int, Konto> Konten { get; set; }

		public Kunde(int kdnNr, string name, string adresse)
		{
			this.KdnNr = kdnNr;
			this.Name = name;
			this.Adresse = Adresse;
			this.Konten = new Dictionary<int, Konto>();
		}

		public int einzahlen(Transaction t)
		{
			return this.Konten[t.targetKntNr].einzahlen(t);
		}

		public int abheben(Transaction t)
		{
			return this.Konten[t.targetKntNr].auszahlen(t);
		}

		public void kontoEröffnen(Konto newKonto)
		{
			this.Konten.Add(newKonto.KntNr, newKonto);
		}

		public bool existiertKonto(int kntNr)
		{
			return this.Konten.ContainsKey(kntNr);
		}

		internal void printKonten()
		{
			foreach (int key in this.Konten.Keys)
			{
				Console.WriteLine($"Kontonummer: {this.Konten[key].KntNr.ToString().PadLeft(3)}  -  Stand: {this.Konten[key].Stand}");
			}
		}
	}
}