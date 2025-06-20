import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  async validateUser(user: any): Promise<any> {
    // Ici, vous pouvez sauvegarder ou vérifier l'utilisateur dans votre base de données
    // Exemple : vérifier si l'email existe, sinon créer un nouvel utilisateur
    return user;
  }
}