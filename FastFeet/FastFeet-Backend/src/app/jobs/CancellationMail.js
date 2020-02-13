import Mail from '../../lib/Mail';

class CancellationMail {
  get key() {
    return 'CancellationMail';
  }

  async handle({ data }) {
    const { delivery } = data;
    const { deliveryman } = delivery[0];

    await Mail.sendMail({
      to: `${deliveryman.name} <${deliveryman.email}>`,
      subject: 'Nova encomenda',
      template: 'cancellation',
      context: {
        deliveryman: deliveryman.name,
        product: delivery[0].product,
        recipient: delivery[0].recipient,
      },
    });
  }
}

export default new CancellationMail();
