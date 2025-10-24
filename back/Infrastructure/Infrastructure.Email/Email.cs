namespace Infrastructure.Email;
public class Email
{
    public string From { get; set; } = string.Empty;
    public string To { get; set; } = string.Empty;
    public string Subject { get; set; } = string.Empty;
    public string Body { get; set; } = string.Empty;
    public string? Cc { get; set; } = null;
    public string? Bcc { get; set; } = null;
    public string? ReplyTo { get; set; } = null;
}
