
import SectionSeparator from '../../components/SectionSeparator';
import { useEffect, useState } from 'react';
import { TYPES, SIZES, FORMULES, PRICES } from './tarifs.constants';

export default function Estimation() {
    const [type, setType] = useState();
    const [zenOption, setZenOption] = useState(false);
    const [size, setSize] = useState();
    const [formule, setFormule] = useState();
    const [price, setPrice] = useState();

    const getPrice = () => {
        if (type === TYPES.cat) {
            return {
                fixed: zenOption ? PRICES.cat.zen.price : 0,
                hourly: PRICES.cat.default.price
            };
        } else if (type === TYPES.dog) {
            if (!size || !formule) {
                return null;
            } else {
                const tarif = PRICES[size][formule];
                return tarif ? {
                    fixed: tarif.hourly ? 0 : tarif.price,
                    hourly: tarif.hourly ? tarif.price : 0
                } : null;
            }
        }
        return null;
        
    }

    useEffect(() => {
        setPrice(getPrice());
    }, [type, zenOption, size, formule])

    return (
        <>
        <SectionSeparator>Estimer mon tarif</SectionSeparator>
            <div className="col">
                <form className="w-100">
                    <div className="form-row">
                        <div className="form-group col-md">
                            <label htmlFor="selectType">Quel animal ?</label>
                            <select className="form-control" id="selectType" defaultValue={'DEFAULT'} value={type} onChange={(data) => setType(data.target.value)}>
                            <option value="DEFAULT" disabled>Choisissez votre animal</option>
                            <option value={TYPES.dog}>Chien</option>
                            <option value={TYPES.cat}>Chat</option>
                            </select>
                        </div>
                        {(type && type === TYPES.dog) && 
                            <div className="form-group col-md">
                                <label htmlFor="selectSize">Taille</label>
                                <select className="form-control" id="selectSize" defaultValue={'DEFAULT'} value={size} onChange={(data) => setSize(data.target.value)}>
                                    <option value="DEFAULT" disabled>taille</option>
                                    <option value={SIZES.mpc}>Mini poils courts</option>
                                    <option value={SIZES.mpl}>Mini poils longs</option>
                                    <option value={SIZES.ppc}>Petit poils courts</option>
                                    <option value={SIZES.ppl}>Petit poils longs</option>
                                    <option value={SIZES.moyen}>Moyen</option>
                                    <option value={SIZES.grand}>Grand / Géant</option>
                                </select>
                            </div>
                        }
                        {(type && type === TYPES.dog && size) && 
                            <div className="form-group col-md">
                                <label htmlFor="selectFormula">Prestation</label>
                                <select className="form-control" id="selectFormula" defaultValue={'DEFAULT'} value={formule} onChange={(data) => setFormule(data.target.value)}>
                                    <option value="DEFAULT" disabled>formule</option>
                                    <option value={FORMULES.bbtp}>Bain, Brossage, Tête, Pattes</option>
                                    <option value={FORMULES.tonteCourte}>Tonte courte (9mm max)</option>
                                    <option value={FORMULES.coupeCiseaux}>Coupe ciseaux (ou tonte longue)</option>
                                    <option value={FORMULES.epilation}>Epilation</option>
                                </select>
                            </div>
                        }
                    </div>
                    {(type && type === TYPES.cat) && 
                        <div className="row">
                            <div className="form-group col">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="zenOption" checked={zenOption} onChange={(data) => setZenOption(data.target.checked)}/>
                                    <label className="form-check-label" htmlFor="zenOption">Option zen</label>
                                </div>
                            </div>
                        </div>
                    }
                </form>
                {price &&  
                <div className='row justify-content-end' >
                    <h4> Prix estimé :&nbsp;<b>
                            {price.fixed > 0 && <span>{price.fixed}€</span> }
                            {price.fixed > 0 && price.hourly > 0 && <span> + </span> }
                            {price.hourly > 0 && <span>{price.hourly}€ par heure</span> }
                        </b>
                    </h4>
                </div>
                }
                <div className='row'>
                    <ul>
                        <li>Toutes les prestations comprennent coupe de griffes, vérification des coussinets, hygiène initme, épilation des oreilles</li>
                        <li>Pour tous les forfaits, en cas de noeuds importants, <b>15€</b> facturés par 1/2 heure de démêlage</li>
                        <li>En cas de pucs, shampooing + traitement du salon, facturés <b>15€</b></li>
                        <li>Coupe de griffes seule <b>5€</b></li>
                    </ul>
                </div>
            </div>
        </>
    )
}