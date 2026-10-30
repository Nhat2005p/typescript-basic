// 1. Abstract Class
abstract class BaseAccount {
  constructor(
    public readonly id: number,
    public username: string,
    protected isActive: boolean = false
  ) {}

  abstract getAccountRole(): string;
}

// 2. Inheritance & Access Modifiers (public, private, protected)
class MemberAccount extends BaseAccount {
  private passwordHash: string;

  constructor(id: number, username: string, passwordHash: string) {
    super(id, username, true);
    this.passwordHash = passwordHash;
  }

  public verifyPassword(input: string): boolean {
    return this.passwordHash === input;
  }

  public getAccountRole(): string {
    return `Member [${this.username}] - Active: ${this.isActive}`;
  }
}

const acc = new MemberAccount(101, "nhat_dev", "secret123");
console.log(acc.getAccountRole());
