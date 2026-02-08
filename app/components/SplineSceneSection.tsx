'use client'

import { SplineScene } from "@/app/components/ui/spline";
import { Card } from "@/app/components/ui/card"
import { Spotlight } from "@/app/components/ui/spotlight"

export function SplineSceneBasic() {
    return (
        <section className="py-20 bg-black">
            <div className="container-custom">
                <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden border-white/10">
                    <Spotlight
                        className="-top-40 left-0 md:left-60 md:-top-20"
                        fill="white"
                    />

                    <div className="flex flex-col md:flex-row h-full">
                        {/* Left content */}
                        <div className="flex-1 p-8 md:p-12 relative z-10 flex flex-col justify-center">
                            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-6">
                                Интерактивность
                            </h2>
                            <p className="text-neutral-300 max-w-lg text-lg leading-relaxed">
                                Взаимодействуйте с объектами в реальном времени.
                                Вращайте, рассматривайте детали и оцените технологичность
                                наших решений в 3D-формате.
                            </p>
                        </div>

                        {/* Right content */}
                        <div className="flex-1 relative min-h-[300px] md:min-h-auto">
                            <SplineScene
                                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    )
}
