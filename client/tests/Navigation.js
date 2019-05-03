import { expect } from 'chai';
import { Selector } from 'testcafe';

fixture `my first fixture`
    .page `http://localhost:8080`

    test('MyTest', async t => {

    })

    test('Chai expect', async t => {
        await t.expect(Selector('.toolbar__title.mr-4').innerText).contains('Tracker')
    });

    test('Adding a new song', async t => {
      await t.
        expect('.cyan.accent-2.btn.btn--absolute.btn--floating.btn--raised.btn--right.theme--light')
        click('.cyan.accent-2.btn.btn--absolute.btn--floating.btn--raised.btn--right.theme--light')
  });
