using MailKit.Net.Smtp;
using Microsoft.Extensions.Options;
using MimeKit;

namespace Infrastructure.Email.Smtp;
public class SmtpEmailSenderService : IEmailSenderService
{
    private readonly EmailSettings _settings;

    public SmtpEmailSenderService(IOptions<EmailSettings> options)
    {
        _settings = options.Value;
    }

    public async Task Send(Email email)
    {
        var emailToSend = new MimeMessage();
        emailToSend.From.Add(MailboxAddress.Parse(email.From));
        emailToSend.To.Add(MailboxAddress.Parse(_settings.To));
        emailToSend.Subject = email.Subject;

        var builder = new BodyBuilder { HtmlBody = email.Body };
        emailToSend.Body = builder.ToMessageBody();

        using var smtp = new SmtpClient();
        await smtp.ConnectAsync(_settings.Smtp.Host, _settings.Smtp.Port, MailKit.Security.SecureSocketOptions.StartTls);
        await smtp.AuthenticateAsync(_settings.Smtp.User, _settings.Smtp.Password);
        await smtp.SendAsync(emailToSend);
        await smtp.DisconnectAsync(true);
    }
}
