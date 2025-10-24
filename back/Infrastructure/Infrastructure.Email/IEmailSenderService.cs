namespace Infrastructure.Email;

public interface IEmailSenderService
{
    Task Send(Email email);
}
