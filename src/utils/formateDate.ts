export default function formateDate( isoDateString: string ) {
  return new Date(
    isoDateString as string
    ).toLocaleDateString(
      'pt-BR',
      {
        dateStyle: 'long',
        timeZone: 'America/Recife'
      }
    );
}