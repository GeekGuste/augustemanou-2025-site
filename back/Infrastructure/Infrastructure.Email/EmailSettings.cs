namespace Infrastructure.Email;

public class EmailSettings
{
    public string From { get; set; } = "";
    public string To { get; set; } = "";
    public SmtpSettings Smtp { get; set; } = new();

    public class SmtpSettings
    {
        public string Host { get; set; } = "";
        public int Port { get; set; }
        public string User { get; set; } = "";
        public string Password { get; set; } = "";
    }
}
