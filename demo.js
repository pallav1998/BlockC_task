const NodeRSA = require("node-rsa");
const text = "Hello RSA!";

var public_key =
  "-----BEGIN PUBLIC KEY-----\n" +
  "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCPjapeuYYRdyAc95XV8ERHc/ov" +
  "6+ZWkmhfsLieSGSW8w8wiyGHCo0fcjtpoSHFuyFXlU4l+ZqQgdgo6WVgNZQTt2iT" +
  "lpvZDLeOcZymfm63aqPGE4FecXJpYuo5jQjI/8p50nbJbh5/FNHjkAKU/CwXpA0W" +
  "+LE0UKRcapuOtg0X/wIDAQAB\n" +
  "-----END PUBLIC KEY-----";
var private_key =
  "-----BEGIN RSA PRIVATE KEY-----\n" +
  "MIICXAIBAAKBgQCPjapeuYYRdyAc95XV8ERHc/ov6+ZWkmhfsLieSGSW8w8wiyGH" +
  "Co0fcjtpoSHFuyFXlU4l+ZqQgdgo6WVgNZQTt2iTlpvZDLeOcZymfm63aqPGE4Fe" +
  "cXJpYuo5jQjI/8p50nbJbh5/FNHjkAKU/CwXpA0W+LE0UKRcapuOtg0X/wIDAQAB" +
  "AoGAaDGbB0YBWYvtcxkBWFccOACmB0Jh3VRHDa1nUvuYhzfEPqe9nha6d6iiFvkt" +
  "WieI+9kS791Loreb/ZXqTvqUjtzahQL5zeqaD+YyDuvKGq+qeMdJkMWZvRm98PC0" +
  "tR3g5E4xNIAMyaPfBte3Z4HGqcC9S3c9GqIul76o5njPpAECQQDzAsEyQGvzug0b" +
  "L+6o0DC6cFON9nqNF1jzLL1/FubKdb/ikOVz0WYPD++JcdvIQge7nINNshHfboeU" +
  "bXWeNjJhAkEAlzn7kLWTpoJmYmIZaCCDy0wdb+qvdOAAOrlhSDW0pKL8rQxd0HIS" +
  "eYbTRKiqbcn3wf9dZTPoqtpqxBgG1DYmXwJAH/HBwcBUMILJjERdxBUyAqAXa7b1" +
  "3ywthjHgax9wkTavVbIkZ3gkSWCX5WJxOL7tU008uW7qCIv4CJvm9Tg8oQJASEqm" +
  "kKHMiH+zs/pTTOymNCwZsmONJqDiWzA9agiKZ12mzo6n1jqBzGiAXEUI29z9vFZ3" +
  "7iYnZm1tNnqJ4S5VnwJBALigxckv/CtALqf95+Fjd/BKKQNS3bCNROOoYhLy+P5J" +
  "gwICtLtTjJXmzh9+k7212WC0KG4KRlwEM0OPfwl8JnU=\n" +
  "-----END RSA PRIVATE KEY-----";

const key_public = new NodeRSA(public_key);
const key_private = new NodeRSA(private_key);

//public key for encryption
const encryptedString = key_public.encrypt(text, "base64");
// console.log("encrypted: ", encryptedString);

//private key for decryption
const decryptedString = key_private.decrypt(encryptedString, "utf8");
console.log("decrypted: ", decryptedString);

//bu public key
// console.log(key_public.decrypt(encryptedString, "utf8"));
