import React, { Component } from "react"
import NavBar from "./navbar.js"
import "./melanoma.css"

class Melanoma extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <img
                    className="rotation-1-4"
                    src="rotation-1-4.png"
                />

                <img
                    className="rotation-1-3"
                    src="rotation-1-3.png"
                />

                <img
                    className="rotation-1-1"
                    src="rotation-1-1.png"
                />

                <img
                    className="rotation-1-2"
                    src="rotation-1-2.png"
                />

                <div className="rectangle-3"></div>
                <div className="ellipse-15 "></div>
                <div className="rectangle-2 "></div>

                <h1 className="title-melanoma ">MELANOMA CANCER</h1>
                <h1 className="text-1-melanoma ">
                    Melanoma is considered as the most dangerous form of skin cancer{" "}
                </h1>

                <div className="what-is-melanoma">
                    <div className="what-is-position">
                        <h1 className="title-whatismelanoma segoeui-normal-fun-blue-45px">What is melanoma?</h1>
                        <br />
                        <br />
                        <h1 className="melanoma-is-consider ">
                            Melanoma is considered the most dangerous form of skin cancer as it typically will spread <br />
      to other areas of the body, including organs, if left untreated.
      <br />
                            <br />
      Non-melanoma skin cancers, such as Squamous Cell Carcinoma and Basal Cell Carcinoma, <br />
      are generally considered less dangerous as they are less likely to spread and can usually be <br />
      treated with surgery. It can occur anywhere on the body, including areas not exposed to <br />
      the sun, like inside the mouth or the palms of the hands. Men are more likely to get <br />
      melanomas on their back while women are more likely to experience them on their legs.
      <br />
                            <br />
      Melanoma begins in melanocyte cells. It occurs when those cells behave abnormally, <br />
      growing excessively and taking over surrounding tissues. They can develop from existing <br />
      moles or skin growths, but, more commonly, they will start as a new growth.
    </h1>
                    </div>
                </div>


                <div className="what-causes-melanoma">
                    <div className="what-cause-position">
                        <h1 className="title-whatismelanoma">What causes Melanoma?</h1>
                    </div>

                    <h1 className="what-cause ">
                        Melanoma occurs when skin is damaged and the DNA fails to repair. During the <br />
      process of producing melanin cells, something goes wrong which triggers mutations <br />
      in those skin cells. These mutated skin cells can multiply rapidly and form malignant <br />
      tumours.
      <br />
                        <br />
      Skin cells ordinarily develop in a contained and calm matter. New healthy cells form <br />
      under your skin’s surface and push the older cells out, where they eventually die and <br />
      fall off – this happens constantly to every one of us. As mentioned before, some cells <br />
      develop DNA damage which triggers the production of cells that are abnormal and <br />
      dangerous.
      <br />
                        <br />
      Unfortunately, it is unclear exactly what damages DNA in skin cells and how it leads <br />
      to melanoma, however, it is very likely a combination of multiple factors. These <br />
      factors include exposure to ultraviolet light, skin type, personal &amp; family history and <br />
      more.
    </h1>
                </div>





                <div className="how-can-it-be-prevented">
                    <div className="how-can-position">
                        <h1 className="title-whatismelanoma">How can it be prevented?</h1>
                    </div>
                    <h1 className="every-hour-on-avera ">
                        Every hour, on average, one person dies of melanoma, the deadliest form of skin cancer.
      <br />
                        <br />
      Research in understanding the causes of melanoma continues to advance. Some studies have shown that nearly 90% are
      considered to be preventable, although there is no guaranteed way to prevent melanoma.
      <br />
                        <br />
      Some risk factors, such as age, gender, race, and family history, cannot be controlled. What we do know is that
      exposure to ultraviolet (UV) light is the primary environmental contributor to melanoma.
      <br />
                        <br />
      So there are things you can do that could lower your risk of getting melanoma and other skin cancers. Because this
      disease can affect anyone, everyone should take steps to reduce their risk.
      <br />
                        <br />
      Can melanoma be prevented?
      <br />
      Short answer – in most cases, yes it can.
      <br />
                        <br />
      1. Check yourself and your loved one’s skin
      <br />
      Once every three months make sure to check your skin from head to toe. Check your partner’s and your child’s skin
      as well: some risky spots can appear in places we don’t normally see such as your scalp, back, and ears.
      <br />
                        <br />
      2. Use sunscreen with SPF 30
      <br />
      You don’t need to be spending the day at the beach to need protection from sun rays. Make sure to apply sunscreen
      to the exposed parts of your body such as face, neck, and hands. The strength of the sun rays on any given day
      gives you an indication of how you should protect yourself against the sun. <br />
                        <br />
      3. Say “no” to tanning beds
      <br />
      The latest research shows that even moderate exposure to tanning beds increases the risk of developing melanoma
      significantly. This is the reason why Australia has banned them altogether, leading the way for other countries to
      do so as well.
      <br />
                        <br />
      If you say “no” to tanning beds you will prevent yourself for melanoma.
      <br />
                        <br />
      4. Cover up and seek shade
      <br />
      Limit your exposure to UV rays by wearing hats and cotton shirts that cover your shoulders, chest and back
      properly. Don’t forget to seek shade especially in the hottest hours – 11 am to 4 pm.
      <br />
                        <br />
      5. Check your nails
      <br />
      While painted nails are pretty, removing the nail polish from your fingers and toes once a month and checking your
      nails can be a lifesaver. Skin cancer lesions may also appear under nails, not just on the skin exposed to the
      sun.
    </h1>
                </div>
            </div>
        )
    }
}

export default Melanoma