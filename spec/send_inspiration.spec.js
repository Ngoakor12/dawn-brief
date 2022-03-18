const { sendEmail, mailOptions } = require("../src/send_inspiration");
const { transporter } = require("../src/config");

describe("SendEmail():", () => {
  beforeEach(() => {
    spyOn(transporter, "sendMail");
    sendEmail(mailOptions);
  });

  it("should check if sendMail() is called once with the right input", () => {
    expect(transporter.sendMail).toHaveBeenCalledOnceWith(
      "",
      jasmine.any(Function)
    );
  });
});
