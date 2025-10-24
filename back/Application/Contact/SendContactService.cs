using Domain.Contact;
using Infrastructure.Email;
using Infrastructure.Email.Smtp;
using Microsoft.Extensions.Localization;

namespace Application.Contact;

public class SendContactService
{
    private readonly IEmailSenderService _emailSender;
    private readonly ILanguageService _langService;
    private readonly IStringLocalizer<SmtpEmailSenderService> _localizer;


    public SendContactService(IEmailSenderService emailSender, ILanguageService langService,
        IStringLocalizer<SmtpEmailSenderService> localizer)
    {
        _emailSender = emailSender;
        _langService = langService;
        _localizer = localizer;
    }

    public async Task Send(ContactForm form)
    {
        var lang = _langService.GetCurrentLanguage();
        var subject = string.Format(_localizer["EmailSubject"], form.Name);
        var messageBody = string.Format(
            _localizer["EmailBody"],
            form.Name,
            form.Email,
            form.Motif,
            form.Message
        );
        var email = new Email
        {
            From = form.Email,
            Subject = subject,
            Body = messageBody,
            ReplyTo = form.Email,
        };
        await _emailSender.Send(email);
    }

    /// <summary>
    /// Seras utilisé plus tard pour personnaliser
    /// </summary>
    /// <param name="title"></param>
    /// <param name="name"></param>
    /// <param name="email"></param>
    /// <param name="motif"></param>
    /// <param name="message"></param>
    /// <param name="lang"></param>
    /// <returns></returns>
    public static string ContactMessage(string title, string name, string email, string motif, string message, string lang)
    {
        return $@"
                <!DOCTYPE html>
                <html lang='{lang}'>
                <head>
                    <meta charset='UTF-8'>
                    <style>
                        body {{ font-family: Arial, sans-serif; color: #333; }}
                        .container {{ max-width: 600px; margin: 0 auto; padding: 20px; }}
                        .title {{ color: #0461BD; font-size: 1.4rem; font-weight: bold; }}
                        .label {{ font-weight: bold; margin-top: 10px; display: block; }}
                        .footer {{ margin-top: 30px; font-size: 0.85rem; color: #999; }}
                    </style>
                </head>
                <body>
                    <div class='container'>
                        <div class='title'>{title}</div>
                        <p><span class='label'>Nom :</span> {name}</p>
                        <p><span class='label'>Email :</span> {email}</p>
                        <p><span class='label'>Motif :</span> {motif}</p>
                        <p><span class='label'>Message :</span></p>
                        <p>{message}</p>

                        <div class='footer'>
                            Langue du message : {lang.ToUpper()}<br/>
                            Ce message a été généré automatiquement.
                        </div>
                    </div>
                </body>
                </html>
                ";
    }
}