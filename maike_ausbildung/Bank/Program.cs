using System;
using System.Collections.Generic;

namespace Bank
{
	class Program
	{
		private static bool running = true;

		static void Main(string[] args)
		{
			Bank bank = new Bank();

			while (running)
			{
				string befehl = Console.ReadLine();
				Console.Clear();

				switch (befehl)
				{
					case "help":
						PrintHelp();
						break;
					case "end":
						ShutDown();
						break;
					case "addknd":
						Console.WriteLine("\nneuer kunde anlegen:\n");

						string name = getTextFromConsole("name eingeben");
						string adresse = getTextFromConsole("adresse eingeben");

						bank.addKunde(name, adresse);
						break;
					case "addknt":
						Console.WriteLine("\nkonto eröffnen:\n");
						bank.addKontoToKunde(getNumberFromConsole("kundennummer eingeben"), getNumberFromConsole("betrag eingeben"));
						break;
					case "prntknd":
						Console.WriteLine("\nkundenliste:\n");
						bank.printAllKunden();
						break;
					case "addmny":
						Console.WriteLine("\neinzahlen\n");
						bank.addMoneyToKnt(getNumberFromConsole("kundennummer eingeben"),
										   	getNumberFromConsole("kontonummer eingeben"),
										   	getNumberFromConsole("betrag eingeben"));
						break;
					case "rmvmny":
						Console.WriteLine("\nauszahlen\n");

						bank.removeMoneyFromKnt(getNumberFromConsole("kundennummer eingeben"),
												getNumberFromConsole("kontonummer eingeben"),
												getNumberFromConsole("betrag eingeben"));
						break;
					case "transfer":
						Console.WriteLine("\nmoney transfer\n");
						int originKdnNr = getNumberFromConsole("von welchem kunden");
						int originKntNr = getNumberFromConsole("von welchem konto");
						int transferBetrag = getNumberFromConsole("welcher betrag");
						int targetKntNr = getNumberFromConsole("zu welchem konto");
						int targetKndNr = getNumberFromConsole("von welchem kunden");

						Transaction targetTransaction = new Transaction(targetKntNr, transferBetrag);
						Transaction originTransaction = new Transaction(originKntNr, transferBetrag);
						Transfer transfer = new Transfer(targetTransaction, targetKndNr, originTransaction, originKdnNr);

						bank.transferMoney(transfer);
						break;
					case "prntknt":
						bank.printKonten(getNumberFromConsole("kundennummer eingeben"));
						break;
					default:
						Console.WriteLine("unknown command");
						break;
				}
			}
		}

		private static int getNumberFromConsole(string message)
		{
			Console.WriteLine(message + ":");
			int number = Convert.ToInt32(Console.ReadLine());
			return number;
		}

		private static string getTextFromConsole(string message)
		{
			Console.WriteLine(message + ":");
			return Console.ReadLine();
		}

		private static void PrintHelp()
		{
			Console.WriteLine("\nmögliche Befehle:\n");

			Console.WriteLine("end       - programm beenden");
			Console.WriteLine("addknd    - kunde anlegen");
			Console.WriteLine("addknt    - konto eröffnen");
			Console.WriteLine("prntknd   - liste aller kunden");
			Console.WriteLine("addmny    - geld einzahlen");
			Console.WriteLine("rmvmny    - geld abheben");
			Console.WriteLine("transfer  - überweisung");
			Console.WriteLine("prntknt   - konto übersicht");

			Console.WriteLine();
		}

		private static void ShutDown()
		{
			Console.WriteLine("shut down");
			running = false;
		}
	}
}
