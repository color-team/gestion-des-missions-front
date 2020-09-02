import { NoteDeFrais } from './../note-de-frais/noteFrais.domain';
import { Collegue } from './../auth/auth.domains';
/**
 * Mission d'un utilisateur
 */
export class Mission {
  dateDebut: Date;
  dateFin: Date;
  villeDepart: string;
  villeArrivee: string;
  prime: number;
  nature: string;
  transport: string;
  statut: string;
  collegue: Collegue;
  noteDeFrais: NoteDeFrais;
}
